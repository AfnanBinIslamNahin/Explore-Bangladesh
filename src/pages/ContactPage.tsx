import React from 'react';
import { Mail, Compass, MessageSquareHeart, Send, CheckCircle2, MapPin } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div id="contact-page" className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact & Travel Inquiries
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Connecting travelers, explorers, and local contributors across all 64 districts of Bangladesh.
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/80 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-6 border border-emerald-100 shadow-sm">
              <Mail className="w-8 h-8" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              We Welcome Your Suggestions & Insights
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg mb-8 text-left sm:text-center">
              <p>
                Have a suggestion, feedback, or additional information about a destination in Bangladesh?
              </p>
              <p>
                If you have discovered a beautiful place, noticed any information that needs correction, or would like to share your travel experience, please feel free to contact me via email.
              </p>
              <p className="font-medium text-slate-700">
                Your suggestions and contributions can help make Explore Bangladesh a more informative and useful platform for everyone.
              </p>
            </div>

            {/* Email Contact Block */}
            <div className="bg-emerald-50/70 border-2 border-emerald-200/80 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Official Contact Email
              </span>
              
              <a
                href="mailto:explorebangladesh.contact@gmail.com"
                className="text-lg sm:text-2xl font-bold text-emerald-800 hover:text-emerald-950 transition-colors break-all underline decoration-emerald-400 hover:decoration-emerald-700 underline-offset-4"
              >
                explorebangladesh.contact@gmail.com
              </a>

              <a
                href="mailto:explorebangladesh.contact@gmail.com"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Open in Email App</span>
              </a>

              <p className="text-xs text-slate-500 pt-2">
                Clicking the link will automatically open your default mail client with this email address as the recipient.
              </p>
            </div>
          </div>
        </div>

        {/* Helpful Contribution Context Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center space-x-2">
              <MessageSquareHeart className="w-4 h-4 text-emerald-700" />
              <span>Ways You Can Contribute</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                <span>Suggest hidden spots and natural landmarks from your home district</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                <span>Share updated bus, train, or launch fares and schedule information</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                <span>Provide seasonal visiting advice, safety tips, or local cultural guidance</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center space-x-2">
              <Compass className="w-4 h-4 text-emerald-700" />
              <span>Informational Platform Notice</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Explore Bangladesh is an independent educational and travel informational resource. We do not provide travel agency services, hotel bookings, transport ticket reservations, or tour guide hiring.
            </p>
            <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100">
              For official government entry permits (such as CHT security clearances or Sundarbans forest entry permissions), please consult the relevant local district administrative offices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
