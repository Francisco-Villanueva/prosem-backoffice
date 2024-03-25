import { asideStore } from "@/store";
import MemberDetails from "./AsideContent/MemberDetails";

export default function AsideContent() {
  const { type } = asideStore();
  switch (type) {
    case "EditMember":
      return <MemberDetails />;
  }
}
