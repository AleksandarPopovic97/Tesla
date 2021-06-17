using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class crew : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "crewid",
                table: "Incident",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Incident_crewid",
                table: "Incident",
                column: "crewid");

            migrationBuilder.AddForeignKey(
                name: "FK_Incident_Crew_crewid",
                table: "Incident",
                column: "crewid",
                principalTable: "Crew",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Incident_Crew_crewid",
                table: "Incident");

            migrationBuilder.DropIndex(
                name: "IX_Incident_crewid",
                table: "Incident");

            migrationBuilder.DropColumn(
                name: "crewid",
                table: "Incident");
        }
    }
}
