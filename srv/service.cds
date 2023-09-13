using idmx from '../db/schema';

service services {
    entity MaterialData as projection on idmx.material;
    entity CustomerData as projection on idmx.customer;

    entity materialReadData {
        Sno               : Integer64;
        Material          : String(50);
        MaterialType      : String(50);
        IndustrySector    : String(50);
        Description       : String(500);
        BaseUnitOfMeasure : String(20);
        MaterialGroup     : String(50);
    }

    entity materialWriteData {
        Sno               : Integer64;
        Material          : String(50);
        MaterialType      : String(50);
        IndustrySector    : String(50);
        Description       : String(500);
        BaseUnitOfMeasure : String(20);
        MaterialGroup     : String(50);
    }

    entity customerReadData {
        Sno          : Integer64;
        AccountGroup : String(50);
        Name         : String(50);
        Name2        : String(50);
        SearchTerm   : String(50);
        HouseNumber  : Int64;
        Street       : String(50);
        Street2      : String(50);
        City         : String(50);
        District     : String(50);
        PostalCode   : Int64;
        Country      : String(50);
    }

    entity customerWriteData {
        Sno          : Integer64;
        AccountGroup : String(50);
        Name         : String(50);
        Name2        : String(50);
        SearchTerm   : String(50);
        HouseNumber  : Int64;
        Street       : String(50);
        Street2      : String(50);
        City         : String(50);
        District     : String(50);
        PostalCode   : Int64;
        Country      : String(50);
    }
    entity ExcelUploadFolder {
        Sno                       : Int64;
        Material                  : String(50);
        MaterialType              : String(50);
        IndustrySector            : String(50);
        Description               : String(500);
        BaseUnitOfMeasure         : String(20);
        MaterialGroup             : String(50);
        WeightUnit                : String(50);
        Plant                     : String(50);
        StorageLocation           : String(100);
        PurchasingGroup           : String(100);
        BatchManagement           : Boolean;
        AutomaticPO               : Boolean;
        GRProcessingTime          : Time;
        valuationClass            : String(50);
        PriceControl              : String(50);
        MovingPrice_StandardPrice : String(50);
        SalesOrganisation         : String(50);
        DistributionChannel       : String(50);
        Division                  : String(50);
        AccountAssignmentGroup    : String(50);
        ItemCategoryGroup         : String(50);
        AvailabilityCheck         : String(50);
        LoadingGroup              : String(50);
        TransportationGroup       : String(50);
        MRPGroup                  : String(50);
        MRPType                   : String(50);
        MRPController             : String(50);
        LotSizingProcedure        : String(50);
        MinLotSize                : String(50);
        MaxLotSize                : String(50);
        ProcurementType           : String(50);
        MRP2GRProcessingTime      : Time;
        MRP3AvailabilityCheck     : String(50);
        InspectionInterval        : String(50);
        QMControlKey              : String(50);

    };

    action ExcelUpload(data : String) returns {
        Status : Integer
    };


}
