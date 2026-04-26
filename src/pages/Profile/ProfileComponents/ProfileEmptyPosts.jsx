import { FileText } from "lucide-react";

export default function ProfileEmptyPosts() {
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white py-16 px-6 flex flex-col items-center justify-center text-center">
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-violet-100 mb-4">
        <FileText className="w-6 h-6 text-violet-600" />
      </div>

      <h3 className="text-lg font-semibold text-gray-900">
        No posts yet
      </h3>

      <p className="text-sm text-gray-500 mt-1">
        You Don't Have Any Posts Yet.
      </p>
    </div>
  );
}