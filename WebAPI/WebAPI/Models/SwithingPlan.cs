using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class SwithingPlan
    {
        
        [Key]
        public int id { get; set; }
        [Column]
        public string phoneNumber { get; set; }
        [Column]
        public string type { get; set; } //
        [Column]
        public string company { get; set; } //
        [Column]
        public Incident incident { get; set; } //
        [Column]
        public WorkRequest workRequest { get; set; } //
        [Column]
        public string status { get; set; } //
        [Column]
        public Crew fieldCrew { get; set; } //
        [Column]
        public int user { get; set; } //
        [Column]
        public DateTime dateStart { get; set; }//
        [Column]
        public DateTime dateEnd { get; set; }//

        [Column]
        public DateTime? dateCreated { get; set; } //
        [Column]
        public string details { get; set; } //svrha
        [Column]
        public string notes { get; set; } //

        [Column]
        public string purpose { get; set; } //

        [Column]
        public string image { get; set; } //
        [Column]
        public List<Device> equipment { get; set; } //

    }
}
