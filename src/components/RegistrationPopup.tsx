import * as Dialog from "@radix-ui/react-dialog";

export function RegistrationPopup({ children }: { children: React.ReactNode }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay 
          className="fixed inset-0 bg-black/50" 
          style={{ zIndex: 9998 }} 
        />
        <Dialog.Content 
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-[90vw] max-w-md"
          style={{ zIndex: 9999 }}
        >
          <Dialog.Title className="text-xl font-bold mb-4">
            Registration Not Open Yet
          </Dialog.Title>
          <Dialog.Description className="text-gray-600 mb-4">
            Registration opens on October 20th. Please follow our organizers on 
            <a href="https://www.linkedin.com/in/mohamedelfatih-seedahmed-077b65245/" 
            className="font-semibold text-[#0084BD] hover:text-[#6929C4] underline decoration-2 transition-colors duration-200"> LinkedIn </a> 
            for updates.
          </Dialog.Description>
          <Dialog.Close className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
            ✕
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}