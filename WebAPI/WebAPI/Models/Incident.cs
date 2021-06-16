using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Incident
    {
        [Key]
        public int id { get; set; }

        [Column]
        public string incidentId { get; set; }

        [Column]
        public int affectedCustomers { get; set; }

        [Column]
        public string type { get; set; }

        [Column]
        public DateTime? outageTime { get; set; }

        [Column]
        public int priority { get; set; }

        [Column]
        public DateTime? etr { get; set; }

        [Column]
        public bool confirmed { get; set; }

        [Column]
        public int calls { get; set; }

        [Column]
        public string status { get; set; }

        [Column]
        public double voltage { get; set; }

        [Column]
        public string description { get; set; }

        [Column]
        public DateTime? eta { get; set; }

        [Column]
        public DateTime? scheduledTime { get; set; }

        [Column]
        public DateTime? ata { get; set; }

        [Column]
        public List<Device> devices { get; set; }

        [Column]
        public Resolution resolution { get; set; }

        [Column]
        public List<Call> incidentCalls { get; set; }

        [Column]
        public string multimedia { get; set; }
    }
}
