import React, { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Jane Doe",
      avatar: "https://i.pravatar.cc/40?img=1",
      text: "This is such an insightful post. Thanks for sharing!",
      time: "2 hours ago",
    },
    {
      id: 2,
      name: "John Smith",
      avatar: "https://i.pravatar.cc/40?img=2",
      text: "I totally agree with your points here.",
      time: "1 hour ago",
    },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const newEntry = {
      id: comments.length + 1,
      name: "You",
      avatar: "https://i.pravatar.cc/40?img=3",
      text: newComment,
      time: "Just now",
    };

    setComments([newEntry, ...comments]);
    setNewComment("");
  };

  return (
    <div className="w-full max-w-3xl  p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-xl bg-gradient-to-r from-purple-600 to-pink-500 border-2 rounded-2xl pl-10 font-semibold mb-4 text-gray-800">General Disscusion</h2>

      {/* New Comment Input */}
      <div className="flex items-start space-x-3 mb-6">
        <img
          src="https://i.pravatar.cc/40?img=3"
          alt="Your Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <textarea
            rows="3"
            className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <div className="text-right mt-2">
            <button
              onClick={handleAddComment}
              className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition"
            >
              Post Comment
            </button>
          </div>
        </div>
      </div>

      {/* Comment List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex items-start space-x-3">
            <img
              src={comment.avatar}
              alt={`${comment.name}'s avatar`}
              className="w-10 h-10 rounded-full"
            />
            <div className="bg-gray-100 p-3 rounded-lg w-full">
              <div className="font-semibold text-sm text-gray-800">
                {comment.name}
              </div>
              <div className="text-gray-700 text-sm mt-1">{comment.text}</div>
              <div className="text-xs text-gray-500 mt-1">{comment.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
