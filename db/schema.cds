namespace db;

entity MasterData {
    key Masterdataid : String @readonly ;
        Entity            : String;
        Country           : String;
        CompanyName       : String;
        ListofDirectors   : String;
        Admin             : String;
        Comments          : String;
        User              : String;
        Statusnew         : String;
        Status_val        : Integer;
       
}