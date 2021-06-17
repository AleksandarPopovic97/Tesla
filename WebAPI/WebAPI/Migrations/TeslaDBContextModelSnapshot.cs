﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebAPI.Models;

namespace WebAPI.Migrations
{
    [DbContext(typeof(TeslaDBContext))]
    partial class TeslaDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.6")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("WebAPI.Models.Call", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("Incidentid")
                        .HasColumnType("int");

                    b.Property<string>("comment")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("customerid")
                        .HasColumnType("int");

                    b.Property<string>("hazard")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("reason")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.HasIndex("Incidentid");

                    b.HasIndex("customerid");

                    b.ToTable("Call");
                });

            modelBuilder.Entity("WebAPI.Models.Crew", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Crew");
                });

            modelBuilder.Entity("WebAPI.Models.Customer", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("account")
                        .HasColumnType("int");

                    b.Property<string>("address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("lastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("priority")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Customer");
                });

            modelBuilder.Entity("WebAPI.Models.Device", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("IncidentId")
                        .HasColumnType("int");

                    b.Property<int?>("SafetyDocumentid")
                        .HasColumnType("int");

                    b.Property<string>("address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("coordinates")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("type")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.HasIndex("IncidentId");

                    b.HasIndex("SafetyDocumentid");

                    b.ToTable("DDevices");
                });

            modelBuilder.Entity("WebAPI.Models.Incident", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("affectedCustomers")
                        .HasColumnType("int");

                    b.Property<DateTime?>("ata")
                        .HasColumnType("datetime2");

                    b.Property<int>("calls")
                        .HasColumnType("int");

                    b.Property<bool>("confirmed")
                        .HasColumnType("bit");

                    b.Property<int?>("crewid")
                        .HasColumnType("int");

                    b.Property<string>("description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("eta")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("etr")
                        .HasColumnType("datetime2");

                    b.Property<string>("incidentId")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("multimedia")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("outageTime")
                        .HasColumnType("datetime2");

                    b.Property<int>("priority")
                        .HasColumnType("int");

                    b.Property<int?>("resolutionid")
                        .HasColumnType("int");

                    b.Property<DateTime?>("scheduledTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("status")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("type")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("voltage")
                        .HasColumnType("float");

                    b.HasKey("id");

                    b.HasIndex("crewid");

                    b.HasIndex("resolutionid");

                    b.ToTable("Incident");
                });

            modelBuilder.Entity("WebAPI.Models.Resolution", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("cause")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("constructionType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("material")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("subcause")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Resolution");
                });

            modelBuilder.Entity("WebAPI.Models.SafetyDocChecklist", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("groundingRemoved")
                        .HasColumnType("bit");

                    b.Property<bool>("ready")
                        .HasColumnType("bit");

                    b.Property<bool>("tagsRemoved")
                        .HasColumnType("bit");

                    b.Property<bool>("workCompleted")
                        .HasColumnType("bit");

                    b.HasKey("id");

                    b.ToTable("SafetyDocChecklist");
                });

            modelBuilder.Entity("WebAPI.Models.SafetyDocument", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("checklistid")
                        .HasColumnType("int");

                    b.Property<string>("createdBy")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("dateTimeCreated")
                        .HasColumnType("datetime2");

                    b.Property<string>("details")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("fieldCrew")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("multimedia")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("notes")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("phoneNo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("safetyDocType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("status")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("switchingPlan")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("type")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.HasIndex("checklistid");

                    b.ToTable("SafetyDocument");
                });

            modelBuilder.Entity("WebAPI.Models.Call", b =>
                {
                    b.HasOne("WebAPI.Models.Incident", null)
                        .WithMany("incidentCalls")
                        .HasForeignKey("Incidentid");

                    b.HasOne("WebAPI.Models.Customer", "customer")
                        .WithMany()
                        .HasForeignKey("customerid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("customer");
                });

            modelBuilder.Entity("WebAPI.Models.Device", b =>
                {
                    b.HasOne("WebAPI.Models.Incident", null)
                        .WithMany("devices")
                        .HasForeignKey("IncidentId");

                    b.HasOne("WebAPI.Models.SafetyDocument", null)
                        .WithMany("devices")
                        .HasForeignKey("SafetyDocumentid");
                });

            modelBuilder.Entity("WebAPI.Models.Incident", b =>
                {
                    b.HasOne("WebAPI.Models.Crew", "crew")
                        .WithMany()
                        .HasForeignKey("crewid");

                    b.HasOne("WebAPI.Models.Resolution", "resolution")
                        .WithMany()
                        .HasForeignKey("resolutionid");

                    b.Navigation("crew");

                    b.Navigation("resolution");
                });

            modelBuilder.Entity("WebAPI.Models.SafetyDocument", b =>
                {
                    b.HasOne("WebAPI.Models.SafetyDocChecklist", "checklist")
                        .WithMany()
                        .HasForeignKey("checklistid");

                    b.Navigation("checklist");
                });

            modelBuilder.Entity("WebAPI.Models.Incident", b =>
                {
                    b.Navigation("devices");

                    b.Navigation("incidentCalls");
                });

            modelBuilder.Entity("WebAPI.Models.SafetyDocument", b =>
                {
                    b.Navigation("devices");
                });
#pragma warning restore 612, 618
        }
    }
}
