import react from 'react';
import DashboardLayout from '../DashboardLayout/DashboardLayout';

const CrewAdding = (props) =>
{
    return(
        <DashboardLayout title="Adding users at crew" {...props}>
            <h1>Adding members with role crew at existing crew</h1>
        </DashboardLayout>
    )
}

export default CrewAdding;