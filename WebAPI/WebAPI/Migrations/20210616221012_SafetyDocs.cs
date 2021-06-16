using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class SafetyDocs : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Customer",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    lastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    account = table.Column<int>(type: "int", nullable: false),
                    address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    priority = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customer", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Resolution",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    cause = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    subcause = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    constructionType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    material = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Resolution", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "SafetyDocChecklist",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    workCompleted = table.Column<bool>(type: "bit", nullable: false),
                    tagsRemoved = table.Column<bool>(type: "bit", nullable: false),
                    groundingRemoved = table.Column<bool>(type: "bit", nullable: false),
                    ready = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SafetyDocChecklist", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Incident",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    incidentId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    affectedCustomers = table.Column<int>(type: "int", nullable: false),
                    type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    outageTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    priority = table.Column<int>(type: "int", nullable: false),
                    etr = table.Column<DateTime>(type: "datetime2", nullable: true),
                    confirmed = table.Column<bool>(type: "bit", nullable: false),
                    calls = table.Column<int>(type: "int", nullable: false),
                    status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    voltage = table.Column<double>(type: "float", nullable: false),
                    description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    eta = table.Column<DateTime>(type: "datetime2", nullable: true),
                    scheduledTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ata = table.Column<DateTime>(type: "datetime2", nullable: true),
                    resolutionid = table.Column<int>(type: "int", nullable: true),
                    multimedia = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Incident", x => x.id);
                    table.ForeignKey(
                        name: "FK_Incident_Resolution_resolutionid",
                        column: x => x.resolutionid,
                        principalTable: "Resolution",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "SafetyDocument",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    phoneNo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    fieldCrew = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    switchingPlan = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    safetyDocType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    createdBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    dateTimeCreated = table.Column<DateTime>(type: "datetime2", nullable: true),
                    details = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    notes = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    checklistid = table.Column<int>(type: "int", nullable: true),
                    multimedia = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SafetyDocument", x => x.id);
                    table.ForeignKey(
                        name: "FK_SafetyDocument_SafetyDocChecklist_checklistid",
                        column: x => x.checklistid,
                        principalTable: "SafetyDocChecklist",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Call",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    reason = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    comment = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    hazard = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    customerid = table.Column<int>(type: "int", nullable: true),
                    Incidentid = table.Column<int>(type: "int", nullable: true)
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
                    table.ForeignKey(
                        name: "FK_Call_Incident_Incidentid",
                        column: x => x.Incidentid,
                        principalTable: "Incident",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "DDevices",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    coordinates = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IncidentId = table.Column<int>(type: "int", nullable: true),
                    SafetyDocumentid = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DDevices", x => x.id);
                    table.ForeignKey(
                        name: "FK_DDevices_Incident_IncidentId",
                        column: x => x.IncidentId,
                        principalTable: "Incident",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DDevices_SafetyDocument_SafetyDocumentid",
                        column: x => x.SafetyDocumentid,
                        principalTable: "SafetyDocument",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Call_customerid",
                table: "Call",
                column: "customerid");

            migrationBuilder.CreateIndex(
                name: "IX_Call_Incidentid",
                table: "Call",
                column: "Incidentid");

            migrationBuilder.CreateIndex(
                name: "IX_DDevices_IncidentId",
                table: "DDevices",
                column: "IncidentId");

            migrationBuilder.CreateIndex(
                name: "IX_DDevices_SafetyDocumentid",
                table: "DDevices",
                column: "SafetyDocumentid");

            migrationBuilder.CreateIndex(
                name: "IX_Incident_resolutionid",
                table: "Incident",
                column: "resolutionid");

            migrationBuilder.CreateIndex(
                name: "IX_SafetyDocument_checklistid",
                table: "SafetyDocument",
                column: "checklistid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Call");

            migrationBuilder.DropTable(
                name: "DDevices");

            migrationBuilder.DropTable(
                name: "Customer");

            migrationBuilder.DropTable(
                name: "Incident");

            migrationBuilder.DropTable(
                name: "SafetyDocument");

            migrationBuilder.DropTable(
                name: "Resolution");

            migrationBuilder.DropTable(
                name: "SafetyDocChecklist");
        }
    }
}
