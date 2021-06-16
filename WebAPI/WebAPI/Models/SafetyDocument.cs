using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class SafetyDocument
    {
        [Key]
        public int id { get; set; }

        [Column]
        public string phoneNo { get; set; }
        [Column]
        public string type { get; set; }
        [Column]
        public string status { get; set; }
        [Column]
        public string fieldCrew { get; set; }
        [Column]
        public string switchingPlan { get; set; }
        [Column]
        public string safetyDocType { get; set; }
        [Column]
        public string createdBy { get; set; }
        [Column]
        public DateTime? dateTimeCreated { get; set; }
        [Column]
        public string details { get; set; }
        [Column]
        public string notes { get; set; }
        [Column]
        public SafetyDocChecklist checklist { get; set; }
        [Column]
        public string multimedia { get; set; }
        [Column]
        public List<Device> devices { get; set; }


    }
}
