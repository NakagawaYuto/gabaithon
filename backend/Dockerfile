FROM ruby:latest

ARG RUBYGEMS_VERSION=3.4.6

RUN mkdir /api

WORKDIR /api

COPY Gemfile /api/Gemfile

COPY Gemfile.lock /api/Gemfile.lock

RUN gem update --system ${RUBYGEMS_VERSION} && \
    bundle install

COPY . /api

RUN set -e

RUN rm -f /api/tmp/pids/server.pid

RUN exec "$@"

# COPY entrypoint.sh /usr/bin/
# RUN chmod +x /usr/bin/entrypoint.sh
# ENTRYPOINT ["entrypoint.sh"]

CMD ["rails", "server", "-b", "0.0.0.0"]
