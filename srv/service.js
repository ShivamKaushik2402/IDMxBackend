const cds = require("@sap/cds");
class services extends cds.ApplicationService {
    async init() {
        const db = await cds.connect.to("db");
        console.log(db)

        const { material,customer } = cds.entities("idmx");

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

        await super.init();
    }
}
module.exports = { services };