const fs=require('fs')
// const index=fs.readFileSync('index.html', 'utf-8')
const data=JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const users=data.users;

exports. createUsers=(req, res)=>{
     console.log(req.body);
     users.push(req.body);
     res.status(201).json(req.body)
}

exports. getAllUsers=(req, res)=>{
     res.json(users)
}


exports. getUsers=(req, res)=>{
     const id= +req.params.id
       const user=users.find(p=>p.id===id)
     res.json(user)
}
exports. replaceUsers=(req, res)=>{
     const id= +req.params.id
       const userindex=users.findIndex(p=>p.id===id)
       users.splice(userindex,1,{...req.body,id:id})

     res.status(201).json()
}

exports. updateUsers=(req, res)=>{
     const id= +req.params.id
       const userindex=users.findIndex(p=>p.id===id)
       const user=users[userindex]
       users.splice(userindex,1,{...user,...req.body})

     res.status(201).json()
}

exports. deleteUsers=(req, res)=>{
     const id= +req.params.id
       const userindex=users.findIndex(p=>p.id===id)
       const user=users[userindex]
       users.splice(userindex,1)

     res.status(201).json(user)
}
