using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class SafetyDoc : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
                    details = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    notes = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    checklistid = table.Column<int>(type: "int", nullable: true)
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

            migrationBuilder.CreateIndex(
                name: "IX_SafetyDocument_checklistid",
                table: "SafetyDocument",
                column: "checklistid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SafetyDocument");

            migrationBuilder.DropTable(
                name: "SafetyDocChecklist");
        }
    }
}
