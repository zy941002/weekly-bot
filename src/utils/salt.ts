import * as crypto from "crypto"

export default function sign(secret, content) {
  return crypto.createHmac('sha256', secret).update(content)
    .digest()
    .toString('base64');
}