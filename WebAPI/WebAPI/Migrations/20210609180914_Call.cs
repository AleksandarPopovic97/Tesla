using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class Call : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Call",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    reason = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    comment = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    hazard = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    customerid = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Call", x => x.id);
                    table.ForeignKey(
                        name: "FK_Call_Customer_customerid",
                        column: x => x.customerid,
                        principalTable: "Customer",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Call_customerid",
                table: "Call",
                column: "customerid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Call");
        }
    }
}
