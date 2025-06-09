import { getUserOnboardingStatus } from '@/actions/user'
import { redirect } from "next/navigation";


const IndustryInsightsPage = async() => {
    const {isOnboarded} = await getUserOnboardingStatus();

    if(!isOnboarded) {
        // Redirect to onboarding page if user is not onboarded
        redirect("/onboarding");
    }
  return (
    <div>IndustryInsightsPage</div>
  )
}

export default IndustryInsightsPage