using idmx from '../db/schema';

service services {
    entity MaterialData as projection on idmx.material;
    entity CustomerData as projection on idmx.customer;
    entity materialType as select from idmx.material {
        key MaterialType            
    };

    entity IndustrySector {
    key IndustrySector : String;           
    }
    entity materialReadData {
        Sno                       : Integer64;
        Material                  : String(50);
        MaterialType              : String(50);
        IndustrySector            : String(50);
        Description               : String(500);
        BaseUnitOfMeasure         : String(20);
        MaterialGroup             : String(50);
    }

    entity materialWriteData {
        Sno                       : Integer64;
        Material                  : String(50);
        MaterialType              : String(50);
        IndustrySector            : String(50);
        Description               : String(500);
        BaseUnitOfMeasure         : String(20);
        MaterialGroup             : String(50);
    }
    entity customerReadData {
        Sno                      : Integer64;
        AccountGroup             : String(50);
        Name                     : String(50);
        Name2                    : String(50);
        SearchTerm               : String(50);
        HouseNumber              : Int64;
        Street                   : String(50);
        Street2                  : String(50);
        City                     : String(50);
        District                 : String(50);
        PostalCode               : Int64;
        Country                  : String(50);
    }

    entity customerWriteData {
        Sno                      : Integer64;
        AccountGroup             : String(50);
        Name                     : String(50);
        Name2                    : String(50);
        SearchTerm               : String(50);
        HouseNumber              : Int64;
        Street                   : String(50);
        Street2                  : String(50);
        City                     : String(50);
        District                 : String(50);
        PostalCode               : Int64;
        Country                  : String(50);
    }
    
}
