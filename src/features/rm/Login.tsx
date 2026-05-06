import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAuthStore } from "../../store/authStore";
import { Lock, Mail, ArrowRight } from "lucide-react";

// Section 7: Zod Validation Schema
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginForm = z.infer<typeof loginSchema>;

export const Login = () => {
  const login = useAuthStore((state) => state.login);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    console.log("Login Attempt:", data);
    // Mock API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Section 7: Mock successful response
    login({
      id: "user_2",
      name: "Shivansh Mishra",
      email: data.email,
      role: "rm"
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full">
        {/* Logo Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl shadow-xl shadow-blue-200 mb-4 text-white text-2xl font-black italic">
            L
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tighter">LeadOS</h1>
          <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mt-2">Relationship Manager Portal</p>
        </div>

        {/* Login Card */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block px-1">Corporate Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 text-slate-400" size={18} />
                <input 
                  {...register("email")}
                  placeholder="rm@leados.demo"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-sm font-bold focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
              {errors.email && <p className="text-red-500 text-[10px] font-bold mt-1 px-1 uppercase tracking-tighter">{errors.email.message}</p>}
            </div>

            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block px-1">Security Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-3.5 text-slate-400" size={18} />
                <input 
                  {...register("password")}
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-sm font-bold focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
              {errors.password && <p className="text-red-500 text-[10px] font-bold mt-1 px-1 uppercase tracking-tighter">{errors.password.message}</p>}
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-200 group mt-4"
            >
              {isSubmitting ? "Authenticating..." : "Access Portal"} 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Section 7: Demo Credentials Hint */}
          <div className="mt-8 p-4 bg-blue-50 rounded-2xl border border-blue-100 border-dashed">
            <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Demo Access</p>
            <p className="text-xs font-bold text-blue-600">Email: <span className="text-blue-800">rm@leados.demo</span></p>
            <p className="text-xs font-bold text-blue-600">Pass: <span className="text-blue-800">password123</span></p>
          </div>
        </div>
        
        <p className="text-center mt-8 text-slate-400 text-[10px] font-black uppercase tracking-widest">
          LeadOS Lead Conversion OS v1.0
        </p>
      </div>
    </div>
  );
};