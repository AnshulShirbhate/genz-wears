export default function handler(req, res) {
    try {
        if (req.method === 'GET') {
            // Clear the JWT cookie
            res.setHeader(
              'Set-Cookie',
              'token=; HttpOnly; Max-Age=0; Secure; SameSite=Strict'
            );
        
            return res.status(200).json({ message: 'Logout successful' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
    
  
    return res.status(405).json({ message: 'Method not allowed' });
  }