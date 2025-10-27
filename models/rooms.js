import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  roomId: { type: String, required: true, unique: true },
  roomName: { type: String },
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  inactiveAt: { type: Date },
});


export const Room = mongoose.model("Room", roomSchema);