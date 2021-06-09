using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Resolution
    {
        [Key]
        public int id { get; set; }

        [Column]
        public string cause { get; set; }

        [Column]
        public string subcause { get; set; }

        [Column]
        public string constructionType { get; set; }

        [Column]
        public string material { get; set; }
    }
}
