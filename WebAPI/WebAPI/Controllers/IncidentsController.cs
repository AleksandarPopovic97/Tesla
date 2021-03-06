using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IncidentsController : ControllerBase
    {
        private readonly TeslaDBContext _context;

        public IncidentsController(TeslaDBContext context)
        {
            _context = context;
        }

        // GET: api/Incidents
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Incident>>> GetIncident()
        {
            return await _context.Incident.ToListAsync();
        }

        // GET: api/Incidents/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Incident>> GetIncident(int id)
        {
            var incident = await _context.Incident.Include(c => c.resolution).Include(d => d.devices)
                .Include(cr => cr.crew)
                .Include(c => c.incidentCalls).ThenInclude(c => c.customer).FirstOrDefaultAsync(i => i.id == id);


            if (incident == null)
            {
                return NotFound();
            }

            return incident;
        }

        [HttpGet("[action]/{user}")]
        public async Task<ActionResult<IEnumerable<Incident>>> GetIncidents(int user)
        {
            var incident = await _context.Incident.Include(c => c.resolution).Include(d => d.devices)
                .Include(cr => cr.crew)
                .Include(c => c.incidentCalls).ThenInclude(c => c.customer).Where(i => i.userCreatorId == user).ToListAsync();
            //promeni first or default ToList

            if (incident == null)
            {
                return NotFound();
            }

            return incident;
        }

        // PUT: api/Incidents/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIncident(int id, Incident incident)
        {
            if (id != incident.id)
            {
                return BadRequest();
            }

            _context.Entry(incident).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IncidentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Incidents
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Incident>> PostIncident(Incident incident)
        {
            int lastInc;
            if (!_context.Incident.Any())
            {
                //empty table
                lastInc = 0;
            }
            else
            {
                lastInc = int.Parse(_context.Incident.Max(m => m.id).ToString()) + 1;
            }
            
            incident.incidentId = "INC" + lastInc;
            _context.Incident.Add(incident);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetIncident", new { id = incident.id }, incident);
        }

        // DELETE: api/Incidents/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Incident>> DeleteIncident(int id)
        {
            var incident = await _context.Incident.FindAsync(id);
            if (incident == null)
            {
                return NotFound();
            }

            _context.Incident.Remove(incident);
            await _context.SaveChangesAsync();

            return incident;
        }

        private bool IncidentExists(int id)
        {
            return _context.Incident.Any(e => e.id == id);
        }
    }
}
