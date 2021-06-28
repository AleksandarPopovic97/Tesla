using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class NotesCont : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "WorkRequestid",
                table: "DDevices",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "WorkRequest",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    typeDocument = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    incidentid = table.Column<int>(type: "int", nullable: true),
                    address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    dateAndTimeStart = table.Column<DateTime>(type: "datetime2", nullable: true),
                    dateAndTimeEnd = table.Column<DateTime>(type: "datetime2", nullable: true),
                    userid = table.Column<int>(type: "int", nullable: true),
                    purpose = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    details = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    emergancyWork = table.Column<bool>(type: "bit", nullable: false),
                    company = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    phoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    dateAndTimeCratingWorkRequest = table.Column<DateTime>(type: "datetime2", nullable: true),
                    image = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    notes = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkRequest", x => x.id);
                    table.ForeignKey(
                        name: "FK_WorkRequest_Incident_incidentid",
                        column: x => x.incidentid,
                        principalTable: "Incident",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_WorkRequest_User_userid",
                        column: x => x.userid,
                        principalTable: "User",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DDevices_WorkRequestid",
                table: "DDevices",
                column: "WorkRequestid");

            migrationBuilder.CreateIndex(
                name: "IX_WorkRequest_incidentid",
                table: "WorkRequest",
                column: "incidentid");

            migrationBuilder.CreateIndex(
                name: "IX_WorkRequest_userid",
                table: "WorkRequest",
                column: "userid");

            migrationBuilder.AddForeignKey(
                name: "FK_DDevices_WorkRequest_WorkRequestid",
                table: "DDevices",
                column: "WorkRequestid",
                principalTable: "WorkRequest",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DDevices_WorkRequest_WorkRequestid",
                table: "DDevices");

            migrationBuilder.DropTable(
                name: "WorkRequest");

            migrationBuilder.DropIndex(
                name: "IX_DDevices_WorkRequestid",
                table: "DDevices");

            migrationBuilder.DropColumn(
                name: "WorkRequestid",
                table: "DDevices");
        }
    }
}
