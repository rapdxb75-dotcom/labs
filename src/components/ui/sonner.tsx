import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white/90 group-[.toaster]:backdrop-blur-2xl group-[.toaster]:text-black group-[.toaster]:border-white/60 group-[.toaster]:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12),inset_0_0_0_1px_rgba(255,255,255,0.5)] group-[.toaster]:rounded-[2rem] group-[.toaster]:px-8 group-[.toaster]:py-6 group-[.toaster]:font-sans group-[.toaster]:font-bold group-[.toaster]:tracking-tight group-[.toaster]:border group-[.toaster]:gap-4",
          description: "group-[.toast]:text-black/50 group-[.toast]:font-medium group-[.toast]:text-sm",
          actionButton: "group-[.toast]:bg-black group-[.toast]:text-white group-[.toast]:rounded-full group-[.toast]:px-6 group-[.toast]:py-2 group-[.toast]:font-bold group-[.toast]:text-xs group-[.toast]:uppercase group-[.toast]:tracking-widest group-[.toast]:transition-transform hover:group-[.toast]:scale-105",
          cancelButton: "group-[.toast]:bg-black/5 group-[.toast]:text-black/40 group-[.toast]:rounded-full group-[.toast]:px-6 group-[.toast]:py-2 group-[.toast]:font-bold group-[.toast]:text-xs group-[.toast]:uppercase group-[.toast]:tracking-widest group-[.toast]:transition-colors hover:group-[.toast]:bg-black/10 hover:group-[.toast]:text-black",
          closeButton: "group-[.toast]:bg-white group-[.toast]:border-black/5 group-[.toast]:text-black/20 hover:group-[.toast]:text-black hover:group-[.toast]:bg-white transition-colors",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
