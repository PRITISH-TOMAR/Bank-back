const { Account } = require('../Models/Account')

const addBank = async (req, res) => {
    const { IFSC_code, bank, branch, number, holder, user_reference } = req.body;
    console.log(req.body)
    if (!IFSC_code || !bank || !branch || !number || !holder || !user_reference) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }
    try {

        const existAccount = await Account.findOne({
            $or: [{ IFSC_code }, { number }]
        });

        if (existAccount) {
            return res.status(409).json({ message: 'Already existing details', success: false })
        }


        const newAccount = new Account({ IFSC_code, bank, branch, number, holder, user_reference });
        await newAccount.save();

       
        res.status(201).json({ bank:newAccount, success: true, message: 'Account Added Successfully!' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Server Error" });
    }

}
const getBank = async (req, res) => {

    try {
        // console.log(req.body)
    const order = req.query.order
    const sortDirection = order === 'asc' ? 1 : -1;


    let resAccount = await Account.find({
      ...(req.body.IFSC_code && { IFSC_code: req.body.IFSC_code }),
      ...(req.body.number && { number: req.body.number }),
      ...(req.body.bank && { bank: req.body.bank }),
      ...(req.body.branch && { branch: req.body.branch }),
      ...(req.body.holder && { holder: req.body.holder }),
      ...(req.body.user_reference && { user_reference: req.body.user_reference }),
    }).populate('user_reference', 'email username')
      .sort({ createdAt: sortDirection })

      return res.status(200).json({
        accounts: resAccount, success:true
      })

    } catch (error) 
    {
        console.log(error)
        res.status(500).json({ success: false, message: "Server Error" });
    }


}


const editBank = async (req, res) => {
    const { IFSC_code, bank, branch, number, holder } = req.body;
  
    try {
        const updatedAccount = await Account.findOneAndUpdate(
            { number, IFSC_code},  
            {  bank, branch, holder 
                
            },
            { new: true, runValidators: true }  
        );
         console.log(updatedAccount) 
         res.status(200).json({ bank:updatedAccount, success: true, message: "Account Updated Successfully" });
    }
     catch (error)
    {
        console.log(error)
        res.status(500).json({ success: false, message: "Server Error" });
    }

}

const removeBank = async (req, res) => {
    try {
        // Find the account by 'number' and delete it
    
        const _id =req.params.id;
        console.log(_id)
        const deletedAccount = await Account.findByIdAndDelete(_id);

        if (!deletedAccount) {
            return res.status(404).json({ success:false, message:'Invalid Credentials'});
        }

        return res.status(200).json({ success:true, message:'Account deleted Successfully!'});
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

module.exports = {
    addBank, getBank, editBank, removeBank
}