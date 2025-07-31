import Message from '../models/Message.js';

/**
 * @desc Get the count of user's messages
 * @route GET /api/messages/count
 * @access Private
 */
export const getMessageCount = async (req, res) => {
    try {
        const userId = req.user.id; // ✅ Extract user ID from token middleware

        // Count messages where user is sender or receiver and not deleted
        const count = await Message.countDocuments({
            $and: [
                { isDeleted: false },
                { $or: [{ userId }, { to: userId }] }
            ]
        });

        res.status(200).json({
            success: true,
            message: 'Message count retrieved successfully',
            count,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch message count',
            error: error.message,
        });
    }
};
