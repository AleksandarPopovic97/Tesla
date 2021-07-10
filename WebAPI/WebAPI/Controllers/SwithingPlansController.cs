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
    public class SwithingPlansController : ControllerBase
    {
        private readonly TeslaDBContext _context;

        public SwithingPlansController(TeslaDBContext context)
        {
            _context = context;
        }

        // GET: api/SwithingPlans
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SwithingPlan>>> GetSwithingPlan()
        {
            return await _context.SwithingPlan.ToListAsync();
        }

        // GET: api/SwithingPlans/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SwithingPlan>> GetSwithingPlan(int id)
        {

            var swithingPlan = await _context.SwithingPlan.FindAsync(id);

            if (swithingPlan == null)
            {
                return NotFound();
            }

            return swithingPlan;
        }

        // useeffect .... axios.... 1241452/SwithchingPlans/ GetSwithingPlanByUser / + id / + userId

        [HttpGet("[action]/{id}/{userId}")]
        public async Task<ActionResult<IEnumerable<SwithingPlan>>> GetSwithingPlanByUser(int id, int userId)
        {
            // var swithingPlan = await _context.SwithingPlan.FindAsync(id);

             var swithingPlan = await _context.SwithingPlan.Where(sp => sp.user == userId).ToListAsync();        //change userId to int


            if (swithingPlan == null)
            {
                return NotFound();
            }

            return swithingPlan;
        }

        // PUT: api/SwithingPlans/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSwithingPlan(int id, SwithingPlan swithingPlan)
        {
            if (id != swithingPlan.id)
            {
                return BadRequest();
            }

            _context.Entry(swithingPlan).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SwithingPlanExists(id))
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

        // POST: api/SwithingPlans
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<SwithingPlan>> PostSwithingPlan(SwithingPlan swithingPlan)
        {
            _context.SwithingPlan.Add(swithingPlan);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSwithingPlan", new { id = swithingPlan.id }, swithingPlan);
        }

        // DELETE: api/SwithingPlans/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<SwithingPlan>> DeleteSwithingPlan(int id)
        {
            var swithingPlan = await _context.SwithingPlan.FindAsync(id);
            if (swithingPlan == null)
            {
                return NotFound();
            }

            _context.SwithingPlan.Remove(swithingPlan);
            await _context.SaveChangesAsync();

            return swithingPlan;
        }

        private bool SwithingPlanExists(int id)
        {
            return _context.SwithingPlan.Any(e => e.id == id);
        }
    }
}
