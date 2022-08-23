import React, {useState} from 'react';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import simpleListData from '../../../../@crema/services/db/extraPages/dndData/simpleListData';
import {Avatar} from 'antd';
import PropTypes from 'prop-types';
import '../index.style.less';

const grid = 8;
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function Quote({quote, index}) {
  return (
    <Draggable draggableId={quote.handle} index={index}>
      {(provided) => (
        <div
          style={{
            width: 170,
            marginBottom: 20,
            backgroundColor: '#e0e0e0',
            padding: grid,
          }}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          <div className='hook-dnd-list-item'>
            <Avatar
              className='beautiful-dnd-avatar'
              alt='Remy Sharp'
              src={quote.image}
            />
            <div className='beautiful-dnd-content'>
              <h3>{quote.name}</h3>
              <p className='text-truncate'>@{quote.handle}</p>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}

Quote.propTypes = {
  quote: PropTypes.object,
  index: PropTypes.number,
};

const QuoteList = React.memo(function QuoteList({quotes}) {
  return quotes.map((quote, index) => (
    <Quote quote={quote} index={index} key={quote.id} />
  ));
});

QuoteList.propTypes = {
  quotes: PropTypes.array,
};

const WithHooks = () => {
  const [state, setState] = useState({quotes: simpleListData});

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.compose === result.source.compose) {
      return;
    }

    const quotes = reorder(
      state.quotes,
      result.source.index,
      result.destination.index,
    );

    setState({quotes});
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='with-hook'>
        <div className='with-hook-root'>
          <Droppable droppableId='list'>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <QuoteList quotes={state.quotes} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
};
export default WithHooks;
