import { InfoBlock } from "@/shared/components/shared";

export default function UnauthorizedPage() {
  return (
    <div className="flex items-center justify-center flex-col mt-40">
      <InfoBlock
        text="This page can only be accessed by authorized users"
        title="Not authorized"
        imageUrl="/assets/images/lock.png"
      />
    </div>
  );
}
