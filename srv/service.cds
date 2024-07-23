using {db} from '../db/schema';

service MyService {
    @odata.draft.enabled
    entity MasterData as projection on db.MasterData;
   

}