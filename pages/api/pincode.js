export default function handler(req, res) {
    try{
        let pincodes = {
            "444606": ["Amravati", "Maharashtra"],
            "444601": ["Amravati", "Maharashtra"],
            "441110": ["Nagpur", "Maharashtra"],
            "335009": ["Surat", "Gujarat"],
    
        }
        res.status(200).json(pincodes);
    }catch(e){
        res.status(500).json({error: e})
    }
}
  