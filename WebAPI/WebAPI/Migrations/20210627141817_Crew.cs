using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class Crew : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Crewid",
                table: "User",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_User_Crewid",
                table: "User",
                column: "Crewid");

            migrationBuilder.AddForeignKey(
                name: "FK_User_Crew_Crewid",
                table: "User",
                column: "Crewid",
                principalTable: "Crew",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_User_Crew_Crewid",
                table: "User");

            migrationBuilder.DropIndex(
                name: "IX_User_Crewid",
                table: "User");

            migrationBuilder.DropColumn(
                name: "Crewid",
                table: "User");
        }
    }
}
