using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Device
    {
        [Key]
        public int id { get; set; }

        [Column]
        public string type { get; set; }    //change to enum

        [Column]
        public string name { get; set; }   //4 characters (first 3 of name and incrementing id)

        [Column]
        public string address { get; set; }

        [Column]
        public string coordinates { get; set; }

        public int? IncidentId { get; set; }
        public int? SafetyDocumentid { get; set; }

        //public int Id { get => id; set => id = value; }
        //public string Type { get => type; set => type = value; }
        //public string Name { get => name; set => name = value; }
        //public string Address { get => address; set => address = value; }
        //public string Coordinates { get => coordinates; set => coordinates = value; }
    }
}
