using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class SafetyDocChecklist
    {
        [Key]
        public int id { get; set; }
        [Column]
        public bool workCompleted { get; set; }

        [Column]
        public bool tagsRemoved { get; set; }
        [Column]
        public bool groundingRemoved { get; set; }
        [Column]
        public bool ready { get; set; }

    }
}
