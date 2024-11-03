import PropTypes from 'prop-types';
import styled from 'styled-components';
import UseCard from './UseCard.jsx';

const UsesSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

const UsesSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 64px;
`;

const UsesSectionGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  column-gap: 32px;
  padding-left: 16px;
  border-left: 2px solid #e0e0e0;
`;

const GroupHeading = styled.h2`
  color: ${(props) =>
    props.theme.background === '#1a202c' ? '#B0B0B0' : '#000000'}; /* Light gray in dark mode */
  font-size: 18px;
  font-weight: bold;
  min-width: 128px;
`;

const GroupContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
`;

const UsesSection = ({ items, theme }) => (
  <UsesSectionContainer className="uses-section">
    <UsesSectionContent className="uses-section__content">
      {items.map((group, index) => (
        <UsesSectionGroup key={index} className="uses-section__group">
          <GroupHeading theme={theme}>{group.groupName}</GroupHeading>
          <GroupContent className="uses-section__group-content">
            {group.items.map((item, itemIndex) => (
              <UseCard key={itemIndex} title={item.title} description={item.description} />
            ))}
          </GroupContent>
        </UsesSectionGroup>
      ))}
    </UsesSectionContent>
  </UsesSectionContainer>
);

UsesSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      groupName: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
        })
      ),
    })
  ),
};

UsesSection.defaultProps = {
  items: [],
};

export default UsesSection;