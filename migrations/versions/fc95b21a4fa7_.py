"""empty message

Revision ID: fc95b21a4fa7
Revises: cb8900e7424c
Create Date: 2016-04-22 05:28:49.492200

"""

# revision identifiers, used by Alembic.
revision = 'fc95b21a4fa7'
down_revision = 'cb8900e7424c'

from alembic import op
import sqlalchemy as sa


def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.add_column('wishes', sa.Column('rating', sa.String(length=1), nullable=True))
    ### end Alembic commands ###


def downgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('wishes', 'rating')
    ### end Alembic commands ###
