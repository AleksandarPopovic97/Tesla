using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Crew",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Crew", x => x.id);
                });

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
                name: "User",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    role = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    username = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    lastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    birthday = table.Column<DateTime>(type: "datetime2", nullable: true),
                    isConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    crew = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    image = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Crewid = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.id);
                    table.ForeignKey(
                        name: "FK_User_Crew_Crewid",
                        column: x => x.Crewid,
                        principalTable: "Crew",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
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
                    crewid = table.Column<int>(type: "int", nullable: true),
                    multimedia = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    userCreatorId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Incident", x => x.id);
                    table.ForeignKey(
                        name: "FK_Incident_Crew_crewid",
                        column: x => x.crewid,
                        principalTable: "Crew",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
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
                    multimedia = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    userCreatedId = table.Column<int>(type: "int", nullable: false)
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
                    customerid = table.Column<int>(type: "int", nullable: false),
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
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Call_Incident_Incidentid",
                        column: x => x.Incidentid,
                        principalTable: "Incident",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

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

            migrationBuilder.CreateTable(
                name: "SwithingPlan",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    phoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    company = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    incidentid = table.Column<int>(type: "int", nullable: true),
                    workRequestid = table.Column<int>(type: "int", nullable: true),
                    status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    fieldCrewid = table.Column<int>(type: "int", nullable: true),
                    user = table.Column<int>(type: "int", nullable: false),
                    dateStart = table.Column<DateTime>(type: "datetime2", nullable: false),
                    dateEnd = table.Column<DateTime>(type: "datetime2", nullable: false),
                    dateCreated = table.Column<DateTime>(type: "datetime2", nullable: true),
                    details = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    notes = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    purpose = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    image = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SwithingPlan", x => x.id);
                    table.ForeignKey(
                        name: "FK_SwithingPlan_Crew_fieldCrewid",
                        column: x => x.fieldCrewid,
                        principalTable: "Crew",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_SwithingPlan_Incident_incidentid",
                        column: x => x.incidentid,
                        principalTable: "Incident",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_SwithingPlan_WorkRequest_workRequestid",
                        column: x => x.workRequestid,
                        principalTable: "WorkRequest",
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
                    SafetyDocumentid = table.Column<int>(type: "int", nullable: true),
                    SwithingPlanid = table.Column<int>(type: "int", nullable: true),
                    WorkRequestid = table.Column<int>(type: "int", nullable: true)
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
                    table.ForeignKey(
                        name: "FK_DDevices_SwithingPlan_SwithingPlanid",
                        column: x => x.SwithingPlanid,
                        principalTable: "SwithingPlan",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DDevices_WorkRequest_WorkRequestid",
                        column: x => x.WorkRequestid,
                        principalTable: "WorkRequest",
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
                name: "IX_DDevices_SwithingPlanid",
                table: "DDevices",
                column: "SwithingPlanid");

            migrationBuilder.CreateIndex(
                name: "IX_DDevices_WorkRequestid",
                table: "DDevices",
                column: "WorkRequestid");

            migrationBuilder.CreateIndex(
                name: "IX_Incident_crewid",
                table: "Incident",
                column: "crewid");

            migrationBuilder.CreateIndex(
                name: "IX_Incident_resolutionid",
                table: "Incident",
                column: "resolutionid");

            migrationBuilder.CreateIndex(
                name: "IX_SafetyDocument_checklistid",
                table: "SafetyDocument",
                column: "checklistid");

            migrationBuilder.CreateIndex(
                name: "IX_SwithingPlan_fieldCrewid",
                table: "SwithingPlan",
                column: "fieldCrewid");

            migrationBuilder.CreateIndex(
                name: "IX_SwithingPlan_incidentid",
                table: "SwithingPlan",
                column: "incidentid");

            migrationBuilder.CreateIndex(
                name: "IX_SwithingPlan_workRequestid",
                table: "SwithingPlan",
                column: "workRequestid");

            migrationBuilder.CreateIndex(
                name: "IX_User_Crewid",
                table: "User",
                column: "Crewid");

            migrationBuilder.CreateIndex(
                name: "IX_WorkRequest_incidentid",
                table: "WorkRequest",
                column: "incidentid");

            migrationBuilder.CreateIndex(
                name: "IX_WorkRequest_userid",
                table: "WorkRequest",
                column: "userid");
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
                name: "SafetyDocument");

            migrationBuilder.DropTable(
                name: "SwithingPlan");

            migrationBuilder.DropTable(
                name: "SafetyDocChecklist");

            migrationBuilder.DropTable(
                name: "WorkRequest");

            migrationBuilder.DropTable(
                name: "Incident");

            migrationBuilder.DropTable(
                name: "User");

            migrationBuilder.DropTable(
                name: "Resolution");

            migrationBuilder.DropTable(
                name: "Crew");
        }
    }
}
