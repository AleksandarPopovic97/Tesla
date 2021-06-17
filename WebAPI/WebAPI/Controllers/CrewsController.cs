﻿using System;
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
    public class CrewsController : ControllerBase
    {
        private readonly TeslaDBContext _context;

        public CrewsController(TeslaDBContext context)
        {
            _context = context;
        }

        // GET: api/Crews
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Crew>>> GetCrew()
        {
            return await _context.Crew.ToListAsync();
        }

        // GET: api/Crews/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Crew>> GetCrew(int id)
        {
            var crew = await _context.Crew.FindAsync(id);

            if (crew == null)
            {
                return NotFound();
            }

            return crew;
        }

        // PUT: api/Crews/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCrew(int id, Crew crew)
        {
            if (id != crew.id)
            {
                return BadRequest();
            }

            _context.Entry(crew).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CrewExists(id))
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

        // POST: api/Crews
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Crew>> PostCrew(Crew crew)
        {
            _context.Crew.Add(crew);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCrew", new { id = crew.id }, crew);
        }

        // DELETE: api/Crews/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Crew>> DeleteCrew(int id)
        {
            var crew = await _context.Crew.FindAsync(id);
            if (crew == null)
            {
                return NotFound();
            }

            _context.Crew.Remove(crew);
            await _context.SaveChangesAsync();

            return crew;
        }

        private bool CrewExists(int id)
        {
            return _context.Crew.Any(e => e.id == id);
        }
    }
}
