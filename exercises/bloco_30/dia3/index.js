const express = require('express')
const { Address, Employee } = require('./models');

const app = express()

const port = process.env.PORT || 3000;

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses'},
    });

    return res.status(200).json(employees);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
})


// Eager Loading
// app.get('/employees/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const employee = await Employee.findOne({
//       where: { id },
//       include: [{ 
//         model: Address, as: 'addresses',
//         attributes: { exclude: ['number'] },
//       }],
//     });

//     if (!employee) return res.status(404).json({ message: 'Funcionário não encontrado' });

//     return res.status(200).json(employee);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ message: 'Algo deu errado'});
//   }
// })


// Lazy Loading
app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({ where: { id } });

    if (!employee) return res.status(404).json({ message: 'Funcionário não encontrado' });

    if (req.query.includeAddresses === 'true') {
      const addresses = await Address.findAll({ where: { employeeId: id } });
      return res.status(200).json({ employee, addresses });
    }
    return res.status(200).json(employee);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado'});
  }
})


app.get('/ping', (req, res) => res.send('Pong'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;