const cds = require("@sap/cds");
const xlsx = require("xlsx");
const bodyParser = require("body-parser");
const multer = require("multer");
const express = require("express");
const fs = require("fs");

class services extends cds.ApplicationService {
    async init() {
        const db = await cds.connect.to("db");


        const { material, customer } = cds.entities("idmx");

        this.on("READ", "IndustrySector", async (req) => {
            console.log("test1")
            let results = await SELECT.from(material);
            console.log("test2")
            console.log(JSON.stringify(results));
            return results;
        });

        this.on("READ", "materialReadData", async (req) => {
            console.log("test1")
            let results = await SELECT.from(material);
            console.log("test2")
            console.log(JSON.stringify(results));
            return results;
        });

        this.on("READ", "materialWriteData", async (req) => {
            let approvedata = [
                {
                    Sno: 5,
                    Material: "Guava",
                    MaterialType: "Fruit",
                    IndustrySector: "Fruit",
                    Description: "Fruit",
                    BaseUnitOfMeasure: "Fruit",
                    MaterialGroup: "Fruit",
                },
            ];

            for (var i = 0; i < approvedata.length; i++) {
                await INSERT.into(material)
                    .columns("Sno",
                        "Material",
                        "MaterialType",
                        "IndustrySector",
                        "Description",
                        "BaseUnitOfMeasure",
                        "MaterialGroup"
                    )
                    .values(
                        approvedata[i]["Sno"],
                        approvedata[i]["Material"],
                        approvedata[i]["MaterialType"],
                        approvedata[i]["IndustrySector"],
                        approvedata[i]["Description"],
                        approvedata[i]["BaseUnitOfMeasure"],
                        approvedata[i]["MaterialGroup"],

                    );
            }

            let results = await SELECT.from(material);
            return results;
        });
        this.on("READ", "customerReadData", async (req) => {
            let results = await SELECT.from(customer);
            console.log(JSON.stringify(results));
            return results;
        });

        this.on("READ", "customerWriteData", async (req) => {
            let approvedata = [
                {
                    Sno: 100,
                    AccountGroup: "thela",
                    Name: "vivek",
                    Name2: "vivek2",
                    SearchTerm: "v",
                    HouseNumber: 121,
                    Street: "noidea",
                    Street2: "noidea",
                    City: "delhi",
                    District: "delhi",
                    PostalCode: 201001,
                    Country: "Bharat",
                },
            ];

            for (var i = 0; i < approvedata.length; i++) {
                await INSERT.into(customer)
                    .columns("Sno",
                        "AccountGroup",
                        "Name",
                        "Name2",
                        "SearchTerm",
                        "HouseNumber",
                        "Street",
                        "Street2",
                        "City",
                        "District",
                        "PostalCode",
                        "Country"
                    )
                    .values(
                        approvedata[i]["Sno"],
                        approvedata[i]["AccountGroup"],
                        approvedata[i]["Name"],
                        approvedata[i]["Name2"],
                        approvedata[i]["SearchTerm"],
                        approvedata[i]["HouseNumber"],
                        approvedata[i]["Street"],
                        approvedata[i]["Street2"],
                        approvedata[i]["City"],
                        approvedata[i]["District"],
                        approvedata[i]["PostalCode"],
                        approvedata[i]["Country"],

                    );
            }

            let results = await SELECT.from(customer);
            return results;
        });

        this.on("ExcelUpload", async (req) => {
            console.log(req.data);
            // console.log('data',req.data);
            let { data } = req.data;
            let workbook = xlsx.read(data.buffer, { type: 'buffer' });
            let file1 = workbook.SheetNames[0];
            let file2 = workbook.Sheets[file1];
            let materialSheetJson = xlsx.utils.sheet_to_json(file2);
            console.log(materialSheetJson);


        });
        this.on("READ", "ExcelUploadFolder", async (req) => {
            console.log("1111111111111111111111111111111");
            let xlFile = fs.readFileSync("/home/user/projects/idmx/db/data/materialdata.xlsx");
            let workbook = xlsx.read(xlFile.buffer, { type: 'buffer' });
            let file1 = workbook.SheetNames[0];
            let file2 = workbook.Sheets[file1];
            let approvedata = xlsx.utils.sheet_to_json(file2);
            console.log(approvedata);
            for (var i = 0; i < approvedata.length; i++) {
                await INSERT.into(material)
                    .columns("Sno",
                        "Material",
                        "MaterialType",
                        "IndustrySector",
                        "Description",
                        "BaseUnitOfMeasure",
                        "MaterialGroup",
                        "WeightUnit",
                        "Plant",
                        "StorageLocation",
                        "PurchasingGroup",
                        "BatchManagement",
                        "AutomaticPO",
                        "GRProcessingTime",
                        "valuationClass",
                        "PriceControl",
                        "MovingPrice_StandardPrice"
                    )
                    .values(
                        approvedata[i]["Sno"],
                        approvedata[i]["Material"],
                        approvedata[i]["MaterialType"],
                        approvedata[i]["IndustrySector"],
                        approvedata[i]["Description"],
                        approvedata[i]["BaseUnitOfMeasure"],
                        approvedata[i]["MaterialGroup"],
                        approvedata[i]["WeightUnit"],
                        approvedata[i]["Plant"],
                        approvedata[i]["StorageLocation"],
                        approvedata[i]["PurchasingGroup"],
                        approvedata[i]["BatchManagement"],
                        approvedata[i]["AutomaticPO"],
                        approvedata[i]["GRProcessingTime"],
                        approvedata[i]["valuationClass"],
                        approvedata[i]["PriceControl"],
                        approvedata[i]["MovingPrice_StandardPrice"]

                    );
            }
            let results = await SELECT.from(material);
            return results;


        });

        await super.init();
    }
}
module.exports = { services };