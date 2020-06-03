//二维码
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QRCodeSchema = new Schema({
  _allreadyUsed: {
    type: Boolean,
    default: false
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  //是否扫码
  scanned: {
    type: Boolean,
    default: false
  },
  status: {
    type: Number,
    default: 0 //0未授权， 1确定授权 -1取消授权
  },
  url: String,
  userInfo: {
    type: Object,
    default: {}
  },
  //创建时间
  createdAt: {
    type: Date,
    default: Date.now
  },
  //过期时间
  expireAt: {
    type: Date 
  }
})

module.exports = mongoose.model('QRcode',QRCodeSchema)