using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class WorkRequest
    {
        [Key]
        public int id { get; set; }

        [Column]
        public string typeDocument { get; set; }

        [Column]
        public string status { get; set; }


        [Column]
        public Incident incident { get; set; }

        [Column]
        public string address { get; set; }

        [Column]
        public DateTime? dateAndTimeStart  { get; set; }

        [Column]
        public DateTime? dateAndTimeEnd { get; set; }

        [Column]
        public User user { get; set; }

        [Column]
        public string purpose { get; set; }

        [Column]
        public string details { get; set; }

        [Column]
        public bool emergancyWork { get; set; }

        [Column]
        public string company { get; set; }

        [Column]
        public string phoneNumber { get; set; }

        [Column]
        public DateTime? dateAndTimeCratingWorkRequest { get; set; }

        [Column]
        public string image { get; set; }

        [Column]
        public List<Device> devices { get; set; }





    }
}
