import { getIndustryInsights } from "@/actions/dashboard";
import DashboardView from "./_components/dashboard-view";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";

const IndustryInsightsPage = async() => {
    const {isOnboarded} = await getUserOnboardingStatus();
     const insights = await getIndustryInsights();

    if(!isOnboarded) {
        // Redirect to onboarding page if user is not onboarded
        redirect("/onboarding");
    }
  return (
    <div className="container mx-auto">
      <DashboardView insights={insights} />
    </div>
  );
};

export default IndustryInsightsPage