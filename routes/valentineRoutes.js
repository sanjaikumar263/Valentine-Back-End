import express from 'express';
import Valentine from '../model/Valentine.js';


const router = express.Router();


// Create Valentine Message
router.post('/', async (req, res) => {
try {
 const emial = req.body.email;
 const existing = await Valentine.findOne({ email: emial });
 console.log(existing);
 
  if (existing) {
    const updated = await Valentine.findOneAndUpdate(
      { email: emial },
      { message: req.body.message },
      { image: req.body.image },
      { new: true }
    );
    return res.status(200).json({ message: '💌 Valentine updated', data: updated, success: true });
  }
  else {
    const valentine = new Valentine(req.body);
    await valentine.save();
    res.status(201).json({ message: '💌 Valentine saved', data: valentine , success: true});
  }
} catch (error) {
res.status(500).json({ error: error.message });
}
});

// GET BY ID ✅
router.get("/:id", async (req, res) => {
  try {
    const data = await Valentine.findById(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Not found 💔" });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


export default router;