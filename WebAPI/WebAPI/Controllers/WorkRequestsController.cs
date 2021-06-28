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
    public class WorkRequestsController : ControllerBase
    {
        private readonly TeslaDBContext _context;

        public WorkRequestsController(TeslaDBContext context)
        {
            _context = context;
        }

        // GET: api/WorkRequests
        [HttpGet]
        public async Task<ActionResult<IEnumerable<WorkRequest>>> GetWorkRequest()
        {
            return await _context.WorkRequest.ToListAsync();
        }

        // GET: api/WorkRequests/5
        [HttpGet("{id}")]
        public async Task<ActionResult<WorkRequest>> GetWorkRequest(int id)
        {
            var workRequest = await _context.WorkRequest.FindAsync(id);

            if (workRequest == null)
            {
                return NotFound();
            }

            return workRequest;
        }

        // PUT: api/WorkRequests/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWorkRequest(int id, WorkRequest workRequest)
        {
            if (id != workRequest.id)
            {
                return BadRequest();
            }

            _context.Entry(workRequest).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WorkRequestExists(id))
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

        // POST: api/WorkRequests
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<WorkRequest>> PostWorkRequest(WorkRequest workRequest)
        {
            _context.WorkRequest.Add(workRequest);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWorkRequest", new { id = workRequest.id }, workRequest);
        }

        // DELETE: api/WorkRequests/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<WorkRequest>> DeleteWorkRequest(int id)
        {
            var workRequest = await _context.WorkRequest.FindAsync(id);
            if (workRequest == null)
            {
                return NotFound();
            }

            _context.WorkRequest.Remove(workRequest);
            await _context.SaveChangesAsync();

            return workRequest;
        }

        private bool WorkRequestExists(int id)
        {
            return _context.WorkRequest.Any(e => e.id == id);
        }
    }
}
