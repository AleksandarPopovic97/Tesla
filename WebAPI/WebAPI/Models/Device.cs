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
        private int id;
        [Column(TypeName = "nvarch(100)")]
        private string type;    //change to enum
        [Column(TypeName = "nvarch(4)")]
        private string name;    //4 characters (first 3 of name and incrementing id)
        [Column(TypeName = "nvarch(100)")]
        private string address;
        [Column(TypeName = "nvarch(100)")]
        private string coordinates;

        public int Id { get => id; set => id = value; }
        public string Type { get => type; set => type = value; }
        public string Name { get => name; set => name = value; }
        public string Address { get => address; set => address = value; }
        public string Coordinates { get => coordinates; set => coordinates = value; }
    }
}
