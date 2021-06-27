using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Crew
    {
        [Key]
        public int id { get; set; }

        [Column]
        public string name { get; set; }

        [Column]
        public List<User> crewMembers { get; set; }
    }
}
