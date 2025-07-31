import Message from '../models/Message.js';

/**
 * @desc Mark all messages of the logged-in user as deleted so that I can see later and delete permanently
 * @route PUT /api/messages/delete
 * @access Private
 */
export const deleteAllMessages = async (req, res) => {
  try {
    const userId = req.user.id; // ✅ Extract user ID from authenticated user
    console.log("userid", userId)

    // Update all messages where the user is sender or recipient
    const result = await Message.updateMany(
      {
        $or: [
          { userId },      // Messages sent by user
          { to: userId }   // Messages received by user
        ]
      },
      { $set: { isDeleted: true } }
    );


    res.status(200).json({
      success: true,
      message: 'All messages deleted successfully',
      modifiedCount: result.modifiedCount,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete messages',
      error: error.message,
    });
  }
};
