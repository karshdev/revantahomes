import mongoose, { Schema} from "mongoose";

const leads = new Schema(
  {
    fullName:{
        type:String,
        required:true
    },
    email: {
      type: String,
      required:true
    },
   phone: {
      type: String,
      required:true
    },
    address: {
        type: String,
        required:true
      },
      status: {
        type: String,
        default:"new"
      },
      type: {
        type: String,
        required:true
        
      },
      message: {
        type: String,
        optional: true
      },
    
},
  { timestamps: true }
);

const LeadsModel = mongoose.models.LeadsModel || mongoose.model("LeadsModel", leads)
export default LeadsModel